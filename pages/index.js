import Link from 'next/link'
import Head from '../components/head'


export default () => (
  <div>
    <Head title="Home" />

	<div className="about" id="welcome">
		<div className="container">
			<div className="wthree_head_section">
				<h3 className="w3l_header w3_agileits_header two">ICT <span>Agenda</span></h3>
			</div>
			<div className="agile_wthree_inner_grids">

				<div className="col-md-6 about_agileinfo">
					<h4 style={{marginTop: "20px"}}>Start Something New</h4>
				</div>
				<div className="col-md-6 about_agileinfo_grid_imgs">
					<img src="/static/images/icta.jpg" alt="" />
				</div>
				<div className="clearfix"></div>
			</div>
		</div>
	</div>

	<div className="modal fade" id="myModal4" tabindex="-1" role="dialog">
		<div className="modal-dialog">
	
			<div className="modal-content">
				<div className="modal-header">
					<button type="button" className="close" data-dismiss="modal">&times;</button>
					<div className="modal-info">
						<h4>Deft</h4>
						<img src="/static/images/banner2.jpg" alt=" " className="img-responsive" />
						<h5>Sub Heading here</h5>
						<p className="para-agileits-w3layouts">Duis sit amet nisi quis leo fermentum vestibulum vitae eget augue. Nulla quam nunc, vulputate id urna at, tempor tincidunt
							metus. Sed feugiat quam nec mauris mattis malesuada.</p>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div className="skills-agileinfo" id="skills">
		<div className="col-md-6 skills" style={{background: "url(/static/images/pdp.jpg)no-repeat 0px 0px"}}>
		</div>
		<div className="col-md-6 bar-grids  w3-agile">
			<div className="wthree_head_section">
				<h3 className="w3l_header w3_agileits_header">Delegate and National <span>Information Services</span></h3>
			</div>
			<div className="wthree_skills">
				<h2 class="text-center" style={{margin:"5px auto"}}>
        VISIT: <a href="http://ktt-backend.herokuapp.com" target="_blank">ktt-backend.herokuapp.com</a>
        </h2>
				<p>Its a backend admin panel that contains details of PDP delegates across the country, and will be used to communicate and document messages and other information sent to them.</p>
			</div>
			
		</div>

		<div className="clearfix"> </div>
	</div>

	<div className="skills-agileinfo" id="skills">
  	<div className="col-md-6 bar-grids  w3-agile">
			<div className="wthree_head_section">
				<h3 className="w3l_header w3_agileits_header">The <span>United States of Nigeria Forum</span></h3>
			</div>
			<div className="wthree_skills">
				<h2>Policy based blog to discuss topical issues in Nigeria.</h2>
			</div>
		</div>
		<div className="col-md-6 skills" style={{background: "url(/static/images/usn.jpg) no-repeat 0px 0px", minHeight: "800px"}}>
		</div>
		<div className="clearfix"> </div>
	</div>
  
  <div className="skills-agileinfo" id="skills">
    <div className="col-md-6 skills" style={{background: "url(/static/images/youfirst.jpg) no-repeat 0px 0px", minHeight: "800px"}}>
		</div>
    <div className="col-md-6 bar-grids  w3-agile">
			<div className="wthree_head_section">
				<h3 className="w3l_header w3_agileits_header">You <span>First Platform</span></h3>
			</div>
			<div className="wthree_skills">
			<h2 class="text-center" style={{margin:"10px auto"}}>
        VISIT: <a href="http://ktt-app.herokuapp.com" target="_blank">ktt-app.herokuapp.com</a>
        </h2>
				<p>This an online campaign platform for his excellency, adopting You First as his political mantra. Government and governance should be about the people,
					and in the coming political dispensation, it about the people. </p>
			</div>
		</div>
		<div className="clearfix"> </div>
	</div>

  <div className="skills-agileinfo" id="skills">
    
    <div className="col-md-6 bar-grids  w3-agile">
			<div className="wthree_head_section">
				<h3 className="w3l_header w3_agileits_header">KTT.<span>YEZ Platform</span></h3>
			</div>
			<div className="wthree_skills">
			<h2 class="text-center" style={{margin:"10px auto"}}>
        VISIT: <a href="http://ktt-yez.herokuapp.com/user" target="_blank">ktt-yez.herokuapp.com</a>
        </h2>
				<p>This an online platform that collects data of yet to be employed youth, conducting an online assessment test for free to determine their employability state and providing solutions accordingly. </p>
			</div>
		</div>
    <div className="col-md-6 skills" style={{background: "url(/static/images/yez1.png) no-repeat 0px 0px"}}>
		</div>
		<div className="clearfix"> </div>
	</div>



	<div className="skills-agileinfo" id="skills">
		<div className="col-md-6 skills" style={{background: "url(/static/images/mobile.jpg) no-repeat 0px 0px"}}>
		</div>
    <div className="col-md-6 bar-grids  w3-agile">
			<div className="wthree_head_section">
				<h3 className="w3l_header w3_agileits_header">YOU<span> First Mobile</span></h3>
				<h3 className="w3l_header w3_agileits_header">KTT<span> YEZ Mobile</span></h3>
			</div>
			<div className="wthree_skills">
			
			<p>
				App will be signed and placed on google playstore as soon as campaign policies, and content have been approved.
			</p>
			</div>
		</div>
    
		<div className="clearfix"> </div>
	</div>


  <div className="skills-agileinfo" id="skills">
    <div className="col-md-6 bar-grids  w3-agile">
			<div className="wthree_head_section">
				<h3 className="w3l_header w3_agileits_header">KTT <span>Television</span></h3>
			</div>
			<div className="wthree_skills">
			<h2 class="text-center" style={{margin:"10px auto"}}>
        VISIT: <a href="hhttp://ktt-app.herokuapp.com/news" target="_blank">ktt-app.herokuapp.com/news</a>
        </h2>
			</div>
		</div>
    <div className="col-md-6 skills" style={{background: "url(/static/images/ktttv.png) no-repeat 0px 0px"}}>
		</div>
    
		<div className="clearfix"> </div>
	</div>

  <div className="skills-agileinfo" id="skills">
    <div className="col-md-6 skills" style={{background: "url(/static/images/icta.jpg) no-repeat 0px 0px"}}>
		</div>
    <div className="col-md-6 bar-grids  w3-agile">
			<div className="wthree_head_section">
				<h3 className="w3l_header w3_agileits_header">ICT <span>Campaign Centre Infrastructure</span></h3>
			</div>
			<div className="wthree_skills">
				<p>
        <h2 class="text-center">Visit the Campaign ICT center</h2>
        </p>
			</div>
		</div>
    
		<div className="clearfix"> </div>
	</div>

  <div className="skills-agileinfo" id="skills">
    <div className="col-md-6 bar-grids  w3-agile">
			<div className="wthree_head_section">
				<h3 className="w3l_header w3_agileits_header">Graphics <span>Print Media</span></h3>
			</div>
			<div className="wthree_skills">
				<h3 class="text-center">
        We have samples of designed souvenirs designed at the campaign ICT center for His Excellency
        </h3>
			</div>
		</div>
    <div className="col-md-6 skills" style={{background: "url(/static/images/graphics.jpg) no-repeat 0px 0px"}}>
		</div>
    
		<div className="clearfix"> </div>
	</div>

  <div className="skills-agileinfo" id="skills">
		<div className="col-md-6 skills" style={{background: "url(/static/images/bilboard.jpg) no-repeat 0px 0px"}}>
		</div>
    <div className="col-md-6 bar-grids  w3-agile">
			<div className="wthree_head_section">
				<h3 className="w3l_header w3_agileits_header">KTT <span>Sport Support Group</span></h3>
			</div>
			<div className="wthree_skills">
				<h3>
					Nigeria is a football loving nation, and this is one of the things that unites us irrespective of tribe or religion.
					The world cup is in 30days time, and there is no better time we can show love to Nigerians and show our support for the super eagles of Nigeria.
				</h3>
			</div>
		</div>
       
		<div className="clearfix"> </div>
	</div>

	<div className="skills-agileinfo" id="skills">
    
    <div className="col-md-6 bar-grids  w3-agile">
			<div className="wthree_head_section">
				<h3 className="w3l_header w3_agileits_header">Online <span>Polling Solution(UNOP)</span></h3>
			</div>
			<div className="wthree_skills">
			<h2 class="text-center" style={{margin:"10px auto"}}>
        VISIT: <a href="http://ktt-app.herokuapp.com/contact" target="_blank">ktt-app.herokuapp.com</a>
        </h2>
				<p>
					This an online polling feature on the campaign website. This feature will help in gathering real data (phone numbers).
        </p>
			</div>
		</div>
		<div className="col-md-6 skills" style={{background: "url(/static/images/polling.jpg) no-repeat 0px 0px"}}>
		</div>
    
		<div className="clearfix"> </div>
	</div>

	<div className="skills-agileinfo" id="skills">
		<div className="col-md-6 skills" style={{background: "url(/static/images/blog.PNG) no-repeat 0px 0px"}}>
		</div>
    <div className="col-md-6 bar-grids  w3-agile">
			<div className="wthree_head_section">
				<h3 className="w3l_header w3_agileits_header">The New Face of Hope <span>Blog</span></h3>
			</div>
			<div className="wthree_skills">
			<h2 class="text-center" style={{margin:"10px auto"}}>
        VISIT: <a href="http://thenewfaceofhope.com" target="_blank">thenewfaceofhope.com</a>
        </h2>
				<p>
					This an online polling feature on the campaign website. This feature will help in gathering real data (phone numbers).
        </p>
			</div>
		</div>
		
    
		<div className="clearfix"> </div>
	</div>

	<div className="skills-agileinfo" id="skills">
		
    <div className="col-md-6 bar-grids  w3-agile">
			<div className="wthree_head_section">
				<h3 className="w3l_header w3_agileits_header">KTT Personal <span>Website</span></h3>
			</div>
			<div className="wthree_skills">
			<h2 class="text-center" style={{margin:"10px auto"}}>
        VISIT: <a href="https://kabirutanimuturaki.com" target="_blank">kabirutanimuturaki.com</a>
        </h2>
			</div>
		</div>
		
    <div className="col-md-6 skills" style={{background: "url(/static/images/personal.PNG) no-repeat 0px 0px"}}>
		</div>
		<div className="clearfix"> </div>
	</div>
	<div className="skills-agileinfo" id="skills">
    <div className="col-md-6 skills" style={{background: "url(/static/images/newsagg.jpg) no-repeat 0px 0px"}}>
		</div>
    <div className="col-md-6 bar-grids  w3-agile">
			<div className="wthree_head_section">
				<h3 className="w3l_header w3_agileits_header">News <span>Aggregation Service</span></h3>
			</div>
			<div className="wthree_skills">
			<h2 class="text-center" style={{margin:"10px auto"}}>
        VISIT: <a href="hhttp://ktt-app.herokuapp.com" target="_blank">ktt-app.herokuapp.com</a>
        </h2>
				<p>We have this feature scrolling at the top of every page on the campaign website</p>
			</div>
		</div>
    
		<div className="clearfix"> </div>
	</div>

	<div className="skills-agileinfo" id="skills">
    <div className="col-md-6 bar-grids  w3-agile">
			<div className="wthree_head_section">
				<h3 className="w3l_header w3_agileits_header">Social <span>Media Services</span></h3>
			</div>
			<div className="wthree_skills">
				<h3>
					Including antidefamation services to protect and promote the online image of His Excellency
				</h3>
				
					<ul style={{fontSize: "24px"}}>
						<li>Sprout Social</li>
						<li>Brand Watch</li>
						<li>Google Alerts</li>
					</ul>
				
			</div>
		</div>
    <div className="col-md-6 skills" style={{background: "url(/static/images/ssms.png) no-repeat 0px 0px"}}>
		</div>
    
		<div className="clearfix"> </div>
	</div>

	<div className="skills-agileinfo" id="skills">
    <div className="col-md-4 bar-grids  w3-agile">
			<div className="wthree_head_section">
				<h3 className="w3l_header w3_agileits_header">Internal <span>Communication Strategy</span></h3>
			</div>
			<div className="wthree_skills">
				
				
			</div>
		</div>
    <div className="col-md-8 skills" style={{background: "url(/static/images/thehub.png) no-repeat 0px 0px"}}>
		</div>
    
		<div className="clearfix"> </div>
	</div>

  


	<div className="footer">
		<div className="f-bg-w3l">
			<div className="container">
				<div className="col-md-12 w3layouts_footer_grid text-center">
					<p >© 2018. All Rights Reserved | Powered by <a style={{color:"#ff0000", textDecoration:"none"}} href="http://altitude-tech.com/" target="_blank">Altitude Technology Worldwide</a></p>
				</div>
				<div className="clearfix"> </div>
			</div>
		</div>
	</div>

	<script type="text/javascript" src="js/jquery-2.1.4.min.js"></script>
	<script src="js/jquery.waypoints.min.js"></script>
	<script src="js/jquery.countup.js"></script>
	<script>
		{/* $('.counter').countUp(); */}
	</script>
		<script src="js/responsiveslides.min.js"></script>
		<script>
		
			{/* $(function () {
				$("#slider").responsiveSlides({
					auto: true,
					nav: true,
					manualControls: '#slider3-pager',
				})
			}); */}
		</script>

	<script src="js/simplePlayer.js"></script>
	<script>
		{/* $("document").ready(function () {
			$("#video").simplePlayer()
		}); */}
	</script>

	<script src="js/modernizr-2.6.2.min.js"></script>
	<script src="js/jquery.chocolat.js "></script>
	<link rel="stylesheet " href="css/chocolat.css " type="text/css" media="all" />
	<script type="text/javascript ">
		{/* $(function () {
			$('.portfolio-grids a').Chocolat()
		}); */}
	</script>
	<script src="js/owl.carousel.js"></script>
	<script>
		{/* $(document).ready(function () {
			$("#owl-demo2").owlCarousel({
				items: 1,
				lazyLoad: false,
				autoPlay: true,
				navigation: false,
				navigationText: false,
				pagination: true,
			})
		}) */}
	</script>

	<script type="text/javascript" src="js/bootstrap-3.1.1.min.js"></script>


  </div>
)
