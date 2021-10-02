'use strict'

module.exports = new LiteralSearchStrategy()

function LiteralSearchStrategy () {
  this.matches = function (str, crit) {
    if (!str) return false
    str = str.trim().toLowerCase()
    crit = crit.endsWith(' ') ? [crit.toLowerCase()] : crit.trim().toLowerCase().split(' ')

    // SEARCH BY PHRASE IF SEARCH INPUT STARTS WITH A QUOTE CHAR
    if (crit.search(/['"“”‘’]/) == 0) {
      return str.indexOf(crit.replace(/['"“”‘’]/g, '')) >= 0
    }

    // OTHERWISE SEARCH FOR ALL WORDS
    return crit.split(' ').filter(function (word) {
      return str.indexOf(word) >= 0
    }).length === crit.split(' ').length
  }
}

