var express = require('express')
    , os = require('os')
    , compression = require('compression')
    , morgan = require('morgan')
    , methodOverride = require('method-override')
    , session = require('express-session')
    , bodyParser = require('body-parser')
    , cookieParser = require('cookie-parser')
    , favicon = require('serve-favicon')
    , interfaces = os.networkInterfaces()
    , addrs = []