#!/usr/bin/env python2.7
# -*- coding: utf-8 -*-

from __future__ import print_function
import sys, os, re
from collections import OrderedDict
from zipfile import ZipFile
from PyQt4.QtGui import *
from PyQt4.QtCore import *

zip_re = re.compile(r"johnsmith_v(\d.\d\w?).zip")

colors = {QColor.fromRgb(*rgb).rgb() for rgb in (
	(65,76,79),
	(88,90,92),
	(73,161,148),
	(74,87,90),
	(78,67,58),
	(90,78,67),
	(91,91,91),
	(210,158,223),
	(121,124,127),
)}

black = QColor(0,0,0).rgb()
def valid_tile(tile, u):
	#return True #TODO: Handwaving
	transparent = u**2
	threshold = 20
	for x in range(u):
		for y in range(u):
			pixel = tile.pixel(x,y)
			if pixel in colors:
				threshold -= 1
			elif black == tile.alphaChannel().pixel(x,y):
				transparent -= 1
	
	return threshold > 0 and transparent != 0

def zipfiles(direc):
	for path in sorted(os.listdir(direc)):
		matching_path = zip_re.match(path)
		if matching_path:
			ver = matching_path.group(1)
			yield ver, ZipFile(os.path.join(direc, path))

sheetnames = {"terrain", "gui/items", "particles"}

def sheets(direc):
	sheets = {}
	for ver, zipfile in zipfiles(direc):
		for sheetname in sheetnames:
			if sheetname not in sheets:
				sheets[sheetname] = OrderedDict()
			filename = sheetname + ".png"
			if filename in zipfile.namelist():
				sheets[sheetname][ver] = QImage.fromData(zipfile.read(filename), "png")
	return sheets

dirnames = {"mob"}

def dir_contents(direc):
	dir_contents = {}
	for ver, zipfile in zipfiles(direc):
		for dirname in dirnames:
			if dirname not in dir_contents:
				dir_contents[dirname] = {}
			for filename in zipfile.namelist():
				if filename.startswith(dirname) and filename.endswith(".png"):
					entityname = re.match(r"{}/(.*).png".format(dirname), filename).group(1)
					if entityname not in dir_contents[dirname]:
						dir_contents[dirname][entityname] = OrderedDict()
					dir_contents[dirname][entityname][ver] = QImage.fromData(zipfile.read(filename), "png")
	return dir_contents

if __name__ == "__main__":
	app = QApplication(sys.argv)
	pages = QTabWidget()
	pages.setDocumentMode(True)
	
	if len(sys.argv) > 1:
		direc = sys.argv[1]
	else:
		direc = os.path.abspath(os.path.dirname(__file__))
	
	for name, versions in sheets(direc).items():
		scrollarea = QScrollArea()
		scrollarea.setWidgetResizable(True)
		scrollarea.setFrameShadow(QFrame.Plain)
		pages.addTab(scrollarea, name.title())
		
		layout = QGridLayout()
		layout.setSpacing(0)
		
		scrollarea.setWidget(QWidget())
		scrollarea.widget().setLayout(layout)
		
		tiles = []
		
		for x in range(16):
			for y in range(16):
				tilelist = []
				
				for ver, sheet in versions.items():
					u = sheet.width() / 16
					tile = sheet.copy(x*u, y*u, u, u)
					
					if valid_tile(tile, u):
						tiles = [t for p, t in tilelist]
						if tile in tiles:
							del tilelist[tiles.index(tile)]
						tilelist.append((ver, tile))
				
				if tilelist:
					selector = QComboBox()
					selector.setFrame(False)
					selector.setIconSize(QSize(u, u))
					
					for ver, tile in tilelist:
						selector.addItem(QIcon(QPixmap.fromImage(tile)), ver)
					
					selector.setCurrentIndex(selector.count()-1)
					layout.addWidget(selector, y, x)
	
	for name, entities in dir_contents(direc).items():
		scrollarea = QScrollArea()
		scrollarea.setWidgetResizable(True)
		scrollarea.setFrameShadow(QFrame.Plain)
		pages.addTab(scrollarea, name.title())
		
		layout = QFormLayout()
		
		scrollarea.setWidget(QWidget())
		scrollarea.widget().setLayout(layout)
		
		for entityname, versions in entities.items():
			first = versions[versions.keys()[0]]
			
			selector = QComboBox()
			selector.setFrame(False)
			selector.setIconSize(first.size())
			
			tilelist = []
			for ver, tile in versions.items():
				tiles = [t for p, t in tilelist]
				if tile in tiles:
					del tilelist[tiles.index(tile)]
				tilelist.append((ver, tile))
			
			print(entityname.replace("_"," ").title()+": [list]")
			for ver, tile in tilelist:
				selector.addItem(QIcon(QPixmap.fromImage(tile)), ver)
				print("[*] "+ver)
			print("[/list]")
			
			selector.setCurrentIndex(selector.count()-1)
			layout.addRow(entityname.replace("_"," ").title(), selector)
	
	pages.show()
	sys.exit(app.exec_())