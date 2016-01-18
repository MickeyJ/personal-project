var React = require('react');


var MasterLayout = React.createClass({
  render: function(){
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          <meta name="description" content={this.props.content}/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
          <link rel="stylesheet" href="/public/css/main.css"/>
          <script type="text/javascript" src="./public/js/jquery-2.2.0.js"></script>
        </head>
        <body>

          <div className="all-wrap">

            <section id="top-contain">
              <header>
                <h1>{this.props.name}</h1>
              </header>

              {/* <nav>
                <ul>
                  <li><a href="/" >Past</a></li>
                  <li><a href="/future">Future</a></li>
                </ul>
              </nav> */}

            </section>


              {this.props.children}


            <section id="footer-contain">
              <footer>
                <ul>
                  <li>&copy; 2015</li>
                  <li>Mickey Malotte</li>
                </ul>

              </footer>
            </section>

          </div>
          <script type="text/javascript" src="./public/js/main.js"></script>
        </body>
      </html>

    )
  }
});
module.exports = MasterLayout;