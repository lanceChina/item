/*
Navicat MySQL Data Transfer

Source Server         : goods
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : login

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2017-11-20 20:30:37
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(10) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `add_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=162 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('0000000159', '1344', 'dsxd12', '2017-11-20 20:12:40');
INSERT INTO `user` VALUES ('0000000160', '1345', 'dsfcx23', '2017-11-20 20:13:44');
INSERT INTO `user` VALUES ('0000000161', '1378', 'dsfcxfcdds32', '2017-11-20 20:15:23');
