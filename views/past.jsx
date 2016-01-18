var React = require('react');
var DefaultLayout = require('./master');


var presentComponent =React.createClass({
  render: function(){
    return(
      <DefaultLayout
        title={this.props.title}
        name={this.props.name}
        content={this.props.content}>
        <script type="text/javascript" src="./public/js/bg-load1.js"></script>

        <main className="main-contain">

          <div className="btn-box">

            <button className="btn back-btn">Back</button>
            <button className="btn next-btn">Next</button>

            <a href="/future" className="pg-link btn next-pg">
              Future
            </a>
          </div>

          <section className="box box-0">
            <p>{this.props.p1}</p>
          </section>

          <section className="box box-1">
            <p>{this.props.p2}</p>
          </section>

          <section className="box box-2">
            <p>{this.props.p3}</p>
          </section>

          <section className="box box-3">
            <p>{this.props.p4}</p>
            <p>{this.props.p5}</p>
          </section>

          <section className="box box-4">
            <p>{this.props.p6}</p>
          </section>
        </main>

      </DefaultLayout>
    )
  }
});
module.exports = presentComponent;