jadeReactCompiler = require 'jade-react-compiler'
anymatch = require 'anymatch'


module.exports = class JadeReactCompiler
  brunchPlugin: yes
  type: 'template'
  extension: 'jreact'
  pattern: /\.jreact/

  constructor: (@config) ->
    @_setOptions(@config)

  compile: (params, callback) ->
    error = null
    result = null

    exclude = @_shouldExcludeFile(params.path)

    unless exclude
      try
        data = jadeReactCompiler.compileClient(params.data)

        result =
          data: data

      catch e
        console.log "ERROR", e
        error = e

    callback error, result

  _setOptions: ->
    @options = @config.plugins?.jadeReact or {}
    @options.exclude ||= false
    unless Array.isArray(@options.exclude)
      @options.exclude = [@options.exclude]

  _shouldExcludeFile: (path) ->
    anymatch(@options.exclude, path)
