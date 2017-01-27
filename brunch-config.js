exports.config = {
  // See http://brunch.io/#documentation for docs.
  files: {
    javascripts: {
      joinTo: {
        'vendor.js': /^node_modules/,
        'main.js': ['app/**/*', '!app/**/*.test.*', '!app/test.*'],
        'test.js': /^app.*[\.\/]test\.[tj]s$/
      },
      order: {
        after: [/\.html$/, /\.css$/]
      }
    },
    stylesheets: {
      joinTo: 'app.css'
    },
    templates: {
      joinTo: 'main.js'
    }
  },
  npm: {
    aliases: {
      // To reproduce issue #1652, comment out these lines:
      '@angular/compiler/testing': '@angular/compiler/bundles/compiler-testing.umd.js',
      '@angular/core/testing': '@angular/core/bundles/core-testing.umd.js',
      '@angular/platform-browser/testing': '@angular/platform-browser/bundles/platform-browser-testing.umd.js',
      '@angular/platform-browser-dynamic/testing': '@angular/platform-browser-dynamic/bundles/platform-browser-dynamic-testing.umd.js',
      '@angular/http/testing': '@angular/http/bundles/http-testing.umd.js'
    }
  },
  plugins: {
    copyfilemon: {
      'jasmine-core': [
        'node_modules/jasmine-core/lib/jasmine-core/jasmine.css',
        'node_modules/jasmine-core/lib/jasmine-core/jasmine.js',
        'node_modules/jasmine-core/lib/jasmine-core/jasmine-html.js',
        'node_modules/jasmine-core/lib/jasmine-core/boot.js'
      ]
    },
    inlineCss: {
      html: true,
      passthrough: [/^node_modules/, 'app/global.css']
    },
    brunchTypescript: {
      ignoreErrors: true
    }
  }
};
