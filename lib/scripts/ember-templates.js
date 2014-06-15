/*!
 * epiphyte-multisig-ewallet
 * A multi-signature e-wallet for Epiphyte
 * Version 0.1.0
 * Compiled Sunday, June 15th, 2014, 1:43:50 PM
 */

this["Ember"] = this["Ember"] || {};
this["Ember"]["TEMPLATES"] = this["Ember"]["TEMPLATES"] || {};

this["Ember"]["TEMPLATES"]["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression;


  data.buffer.push("<header class=\"header\">");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.HeaderView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</header>\n<section class=\"content container\">");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</section>\n<footer class=\"footer\">");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.FooterView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</footer>");
  return buffer;
  
});

this["Ember"]["TEMPLATES"]["components/transactions-summery"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                <tr ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'classNames': ("status")
  },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n                    <td>");
  stack1 = helpers._triageMustache.call(depth0, "id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n                    <td>");
  stack1 = helpers._triageMustache.call(depth0, "date", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n                    <td>");
  stack1 = helpers._triageMustache.call(depth0, "amount", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n                    <td>");
  stack1 = helpers._triageMustache.call(depth0, "sender", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n                    <td>");
  stack1 = helpers._triageMustache.call(depth0, "recipient", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n                </tr>\n            ");
  return buffer;
  }

  data.buffer.push("<div class=\"panel-heading\">\n    <h2>Transactions Summery</h2>\n</div>\n<div class=\"panel-body\">\n    <table class=\"table table-striped\">\n        <thead>\n            <tr>\n                <th></th>\n                <th>Date</th>\n                <th>Amount</th>\n                <th>Sender</th>\n                <th>Recipient</th>\n            </tr>\n        </thead>\n        <tbody>\n            ");
  stack1 = helpers.each.call(depth0, "content", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </tbody>\n    </table>\n</div>");
  return buffer;
  
});

this["Ember"]["TEMPLATES"]["footer"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<img class=\"logo\" src=\"../images/logo-epiphyte.png\"/>");
  
});

this["Ember"]["TEMPLATES"]["header"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n            <ul class=\"nav navbar-nav navbar-left\">\n                <li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "index", options) : helperMissing.call(depth0, "link-to", "index", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n            </ul>\n\n            <ul class=\"nav navbar-nav navbar-right\">\n                <li class=\"active\">Balance: ");
  stack1 = helpers._triageMustache.call(depth0, "formattedBalanceValue", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" B⃦</li>\n                <li><a href=\"#\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "refresh", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Refresh</a></li>\n                <li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "user.logout", options) : helperMissing.call(depth0, "link-to", "user.logout", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n            </ul>\n        ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("Hello ");
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("!");
  return buffer;
  }

function program4(depth0,data) {
  
  
  data.buffer.push("Logout");
  }

function program6(depth0,data) {
  
  
  data.buffer.push("<img class=\"logo pull-left\" src=\"../images/logo-cba.png\"/>");
  }

function program8(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n                <li class=\"dropdown\">\n                    <a data-toggle=\"dropdown\" href=\"#\"><i class=\"glyphicon glyphicon-plus\"></i> Add funds</a>\n                    <ul class=\"dropdown-menu\" role=\"menu\" aria-labeledby=\"dLabel\">\n                        <li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "wallet.buy", options) : helperMissing.call(depth0, "link-to", "wallet.buy", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n                        <li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "wallet.receive", options) : helperMissing.call(depth0, "link-to", "wallet.receive", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n                    </ul>\n                </li>\n                <li>\n                    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(13, program13, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "wallet.send", options) : helperMissing.call(depth0, "link-to", "wallet.send", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    </li>\n            ");
  return buffer;
  }
function program9(depth0,data) {
  
  
  data.buffer.push("Buy");
  }

function program11(depth0,data) {
  
  
  data.buffer.push("Receive");
  }

function program13(depth0,data) {
  
  
  data.buffer.push("<i class=\"glyphicon glyphicon-transfer\"></i> Send Funds");
  }

  data.buffer.push("<nav class=\"navbar navbar-default\" role=\"navigation\">\n    <div class=\"top-nav container-fluid\">\n        ");
  stack1 = helpers['if'].call(depth0, "auth", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n\n    <div class=\"bottom-nav container-fluid\">\n        ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "index", options) : helperMissing.call(depth0, "link-to", "index", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n        <ul class=\"nav navbar-nav\">\n            \n            ");
  stack1 = helpers['if'].call(depth0, "auth", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n          </ul>\n    </div>\n\n</nav>");
  return buffer;
  
});

this["Ember"]["TEMPLATES"]["user/create"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"form panel panel-default\">\n    <div class=\"panel-heading\">\n        <h3>Create user</h3>\n    </div>\n    <div class=\"panel-body\">\n        <form role=\"form\" onsubmit=\"return false;\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "submit", {hash:{
    'on': ("submit")
  },hashTypes:{'on': "STRING"},hashContexts:{'on': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n            <div class=\"form-group\">\n                <div class=\"input-group\">\n                    <span class=\"input-group-addon\">@</span>\n                    <input class=\"form-control\" placeholder=\"username..\"/>\n                </div>\n                <input class=\"form-control\" placeholder=\"password..\" type=\"password\"/>\n                <input class=\"form-control\" placeholder=\"repeat password..\" type=\"password\"/>\n            </div>\n            <div class=\"actions\">\n                <button class=\"btn btn-primary pull-right\" type=\"submit\">Create</button>\n            </div>\n        </form>\n    </div>\n</div>");
  return buffer;
  
});

this["Ember"]["TEMPLATES"]["user/login"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("<i class=\"glyphicon glyphicon-question-sign\"></i> Forgot password");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("<i class=\"glyphicon glyphicon-user\"></i> Create user");
  }

  data.buffer.push("<div class=\"form panel panel-default\">\n    <div class=\"panel-heading\">\n        <h3>My Wallet</h3>\n    </div>\n    <div class=\"panel-body\">\n        <form role=\"form\" onsubmit=\"return false;\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "submit", {hash:{
    'on': ("submit")
  },hashTypes:{'on': "STRING"},hashContexts:{'on': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n            <div class=\"form-group\">\n                <div class=\"input-group\">\n                    <span class=\"input-group-addon\">@</span>\n                    <input class=\"form-control\" placeholder=\"username..\"/>\n                </div>\n                <input class=\"form-control\" placeholder=\"password..\" type=\"password\"/>\n            </div>\n            <div class=\"actions\">\n                <button class=\"btn btn-primary pull-right\" type=\"submit\">Open wallet</button>\n                \n                ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "user.forgot", options) : helperMissing.call(depth0, "link-to", "user.forgot", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "user.create", options) : helperMissing.call(depth0, "link-to", "user.create", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </div>\n        </form>\n    </div>\n</div>");
  return buffer;
  
});

this["Ember"]["TEMPLATES"]["user/logout"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<h2>Come back soon!</h2>");
  
});

this["Ember"]["TEMPLATES"]["wallet/buy"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"form panel panel-default\">\n    <div class=\"panel-heading\">\n        <h3>Buy funds</h3>\n    </div>\n    <div class=\"panel-body\">\n        <form role=\"form\" onsubmit=\"return false;\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "submit", {hash:{
    'on': ("submit")
  },hashTypes:{'on': "STRING"},hashContexts:{'on': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n            <div class=\"form-group\">\n                <div class=\"input-group\">\n                    <span class=\"input-group-addon\">@</span>\n                    <input class=\"form-control\" placeholder=\"from..\"/>\n                </div>\n                <div class=\"input-group\">\n                    <input class=\"form-control\" placeholder=\"amount..\" type=\"number\"/>\n                    <span class=\"input-group-addon\">B⃦</span>\n                </div>\n            </div>\n            <div class=\"actions\">\n                <button class=\"btn btn-primary pull-right\" type=\"submit\">Send</button>\n            </div>\n        </form>\n    </div>\n</div>");
  return buffer;
  
});

this["Ember"]["TEMPLATES"]["wallet/index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push(escapeExpression((helper = helpers['transactions-summery'] || (depth0 && depth0['transactions-summery']),options={hash:{
    'content': ("transactions")
  },hashTypes:{'content': "ID"},hashContexts:{'content': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "transactions-summery", options))));
  
});

this["Ember"]["TEMPLATES"]["wallet/receive"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"form panel panel-default\">\n    <div class=\"panel-heading\">\n        <h3>Receive funds</h3>\n    </div>\n    <div class=\"panel-body\">\n        <form role=\"form\" onsubmit=\"return false;\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "submit", {hash:{
    'on': ("submit")
  },hashTypes:{'on': "STRING"},hashContexts:{'on': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n            <div class=\"form-group\">\n                <div class=\"input-group\">\n                    <span class=\"input-group-addon\">@</span>\n                    <input class=\"form-control\" placeholder=\"from..\"/>\n                </div>\n            </div>\n            <div class=\"actions\">\n                <button class=\"btn btn-primary pull-right\" type=\"submit\">Receive</button>\n            </div>\n        </form>\n    </div>\n</div>");
  return buffer;
  
});

this["Ember"]["TEMPLATES"]["wallet/send"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"form panel panel-default\">\n    <div class=\"panel-heading\">\n        <h2>Send funds</h2>\n    </div>\n    <div class=\"panel-body\">\n        <form role=\"form\" onsubmit=\"return false;\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "submit", {hash:{
    'on': ("submit")
  },hashTypes:{'on': "STRING"},hashContexts:{'on': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n            <div class=\"form-group\">\n                <div class=\"input-group\">\n                    <span class=\"input-group-addon\">@</span>\n                    <input class=\"form-control\" placeholder=\"to..\"/>\n                </div>\n                <div class=\"input-group\">\n                    <input class=\"form-control\" placeholder=\"amount..\" type=\"number\"/>\n                    <span class=\"input-group-addon\">B⃦</span>\n                </div>\n            </div>\n            <div class=\"actions\">\n                <button class=\"btn btn-primary pull-right\" type=\"submit\">Send</button>\n            </div>\n        </form>\n    </div>\n</div>");
  return buffer;
  
});