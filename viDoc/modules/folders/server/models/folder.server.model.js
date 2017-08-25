'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Folder Schema
 */
var FolderSchema = new Schema({
  created: {
    type: Date,
    default: Date.now
  },
  name: {
    type: String,
    trim: true
  },
  describe: {
    type: String,
    default: '',
    trim: true
  },
  articles: {
    type: Array,
    default: []
  },
  subfolders: {
    type: Array,
    default: []
  },
  project: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  }
});

mongoose.model('Folder', FolderSchema);
