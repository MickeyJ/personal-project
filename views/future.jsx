var React = require('react');
var DefaultLayout = require('./master');


var futureComponent =React.createClass({
  render: function(){
    return(
      <DefaultLayout
        title={this.props.title}
        name={this.props.name}
        content={this.props.content}>
        <script type="text/javascript" src="./public/js/bg-load2.js"></script>

        <main className="main-contain">

          <div className="btn-box">
             <a href="/" className="pg-link btn back-pg">Past</a>
          </div>

          <section className="box box-0">
            <p>{this.props.p1}</p>
            <p>{this.props.p2}</p>
          </section>

        </main>
      </DefaultLayout>
    )
  }
});
module.exports = futureComponent;