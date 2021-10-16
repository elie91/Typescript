"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GameManager_1 = require("./modules/GameManager");
var GameMap_class_1 = require("./classes/GameMap.class");
var MovementManager_1 = require("./modules/MovementManager");
var gameMap = new GameMap_class_1.GameMap();
var gameManager = new GameManager_1.GameManager('input.txt', gameMap);
gameManager.loadData();
var movementManager = new MovementManager_1.MovementManager(gameMap);
movementManager.initAdventurersMovements();
gameManager.output();