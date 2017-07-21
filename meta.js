module.exports = {
  "helpers": {
    "if_or": function (v1, v2, options) {
      if (v1 || v2) {
        return options.fn(this);
      }

      return options.inverse(this);
    }
  },
  "prompts": {
    "name": {
      "type": "string",
      "required": true,
      "message": "Project name"
    },
    "author": {
      "type": "string",
      "message": "Author"
    },
    "description": {
      "type": "string",
      "required": false,
      "message": "Project description",
      "default": "Vue项目示例"
    },
    "path": {
      "type": "string",
      "required": true,
      "message": "publish path",
	  "default": function (data) { return data.name; }
    },
	"demo": {
	  "type": "confirm",
	  "message": "include demo?"
	},
	"port": {
	  "type": "string",
      "required": false,
      "message": "dev port",
	  "default": 8080
	}
  },
  "filters": {
	 "src/views/demo/*": "demo"
  },
  "completeMessage": "To get started:\n\n  {{^inPlace}}cd {{destDirName}}\n  {{/inPlace}}npm install\n  npm run dev\n\nDocumentation can be found at https://vuejs-templates.github.io/webpack"
};