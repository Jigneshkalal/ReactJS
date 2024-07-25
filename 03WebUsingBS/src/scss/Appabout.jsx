import React from 'react'

const Appabout = () => {
     
  return (
     
     <div id='about' className="container-fluid mt-5 p-0 block about-block">
        <div className='title-holder'><h2>About-us</h2>
        <div className='subtitle'>Learn More About-us</div>
        </div>
    <div className="row">
    <div className="col-5">
        <img src="/images/img1.jpg" alt="" />
    </div>
    <div className="col-6">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi culpa ea animi quis ipsam, ipsa, officia neque itaque qui corporis temporibus! Dolores omnis facilis autem aperiam porro consectetur perferendis cumque?
        Voluptatibus, tempora iusto magni, excepturi maiores autem obcaecati accusamus et aspernatur omnis doloremque dolore distinctio facere odit quidem quos ducimus sapiente? In officiis tenetur nulla amet libero omnis molestias eum!
        Temporibus cupiditate consequatur accusamus? Voluptates minus ab sint molestias distinctio nemo hic sequi eligendi eum autem laudantium libero, tempora provident eaque! Nam libero possimus cum rem voluptate illo delectus mollitia?
        Veritatis aliquid aut ab dicta aperiam vero natus voluptas officia deserunt laboriosam esse id impedit, facilis consectetur culpa asperiores eius nemo earum nihil cum obcaecati maxime corrupti porro? In, tenetur.</p>
        <div className='progress-block'>
            <h4><i>HTML/CSS</i></h4>
        <div className="progress">
        <div className="bg-primary progress-bar" role="progressbar" style={{width:'50%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">50%</div>
        </div>
        <h4><i>React-JS</i></h4>
        <div className="progress">
        <div className="bg-danger progress-bar" role="progressbar" style={{width:'25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
        </div>
        <h4><i>BOOTSTRAP</i></h4>
        <div className="progress">
        <div className="bg-success progress-bar" role="progressbar" style={{width:'75%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">75%</div>
        </div>

        </div>
    </div>
    
</div>
</div>
  )
}

export default Appabout;