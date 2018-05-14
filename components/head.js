import NextHead from 'next/head'
import { string } from 'prop-types'

const defaultDescription = ''
const defaultOGURL = ''
const defaultOGImage = ''

const Head = (props) => (
  <NextHead>
    <meta charset="UTF-8" />
    <title>{props.title || ''}</title>
    <meta name="description" content={props.description || defaultDescription} />
    
	<title>ICT-Agenda - KTT | Home</title>
	<meta name="viewport" content="width=device-width, initial-scale=1"/>
	<meta httpEquiv="Content-Type" content="text/html; charSet=utf-8" />
	<meta name="keywords" content="ICT, KTT-2019, KTT, Kabiru Taminu Turaki" />
  	<script type="application/x-javascript">
		{/* addEventListener("load", function () {
			setTimeout(hideURLbar, 0)
		}, false);

		function hideURLbar() {
			window.scrollTo(0, 1)
		} */}
	</script>
	<link href="/static/css/bootstrap.css" rel="stylesheet" type="text/css" media="all" />
	<link href="/static/css/owl.carousel.css" rel="stylesheet"/>
	<link rel="stylesheet" href="/static/css/team.css" type="text/css" media="all" />
	<link href="/static/css/style.css" rel="stylesheet" type="text/css" media="all" />
	<link href="/static/css/font-awesome.css" rel="stylesheet"/>
	<link href="//fonts.googleapis.com/css?family=Raleway:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800"
	    rel="stylesheet"/>
	<link href="//fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800" rel="stylesheet"/>
  </NextHead>
)

Head.propTypes = {
  title: string,
  description: string,
  url: string,
  ogImage: string
}

export default Head
