describe('Plugin', function () {
  var plugin;

  beforeEach(function () {
    plugin = new Plugin({});
  });

  it('should be an object', function () {
    expect(plugin).to.be.ok;
  });

  it('should has #compile method', function () {
    expect(plugin.compile).to.be.an.instanceof(Function);
  });

  it('should compile and produce valid result', function (done) {
    var content = 'ul\n  li';
    var expected = 'module.exports=function(){return React.DOM.ul(null,React.DOM.li())};';

    plugin.compile({data: content, path: 'file.jade'}, function (error, result) {
      var data = (result || {}).data;
      expect(error).not.to.be.ok;
      expect(data).to.equal(expected);
      done();
    });
  });

  it('should exclude single files', function (done) {
    var content = 'ul\n  li';
    var expected = null;
    plugin = new Plugin({
      plugins: {
        jadeReact: {
          exclude: /\.static\.jade/
        }
      }
    });

    plugin.compile({data: content, path: 'file.static.jade'}, function (error, result) {
      expect(error).not.to.be.ok;
      expect(result).to.equal(expected);
      done();
    });
  });
});
