import GroupAvatar from '../assets/img/layout/GroupAvatar.png'

function About() {

  // console.log( window.location.origin + '/notFound' );
   
  return (
    <div className="container">
      <div className="container-wrapper">
        <div className="content about">
          <div className="centered"> <img src={GroupAvatar} alt="" /></div>
          {/* <h3 className="title centered">About</h3> */}

          <div className="content-inner">
            <p>
              Game Store is a fictitious store, made up by me <a href="https://github.com/konstantinosTabakis" target="_blank">Konstantinos</a>. 
              The project was created for practice in Ui/Ux design and Front end implementation. The idea came up after following a Ui/Ux bootcamp in order to experiment further on the topic.
              The original design and icons of the project was created with <a href="https://www.figma.com/" target="_blank"  >Figma</a> . The illustration used on the hero section was found <a href="https://storyset.com/" target="_blank" >here</a>.
                
               
            </p>
            <p>
            Various technologies were used with the main focus being on <a href="https://reactjs.org/" target="_blank"  >React.js</a>  and <a href="https://sass-lang.com/" target="_blank"  >Sass</a>.
               The application is fully responsive and some of the features developed are a fully functional shopping cart, items filtering, games live search, favorites page implemented with the use of Local Storage and a 404 page.
                The global state is managed with the React Context Api and Reducers.
            </p>
            <p>
              The data used were scraped from <a href="https://www.germanos.gr/category/gaming/games/ps4-games/?categoryId=cat10050" target="_blank" >here</a> using <a href="https://www.python.org/" target="_blank">Python</a> and specifically <a href="https://scrapy.org/" target="_blank">Scrapy</a>.
            </p>
              <ul>
                <li></li>
                <li></li>
              </ul>
              <p>You can also find me  on <a href="https://www.linkedin.com/in/konstantinos-tabakis/" target="_blank">Linkedin</a>.</p>
              <p className=''>Thanks for stopping by!</p>
          </div>
         
        </div>
      </div>
    </div>
  )
}

export default About