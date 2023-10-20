import React from 'react'

export default function Services() {
  // const TabsItems = [
  //   {title : "ALL"},
  //   {title : "PROGRAMMING"},
  //   {title : "WEB STATIC"},
  //   {title : "CLIENT LANGAUGE"},
  //   {title : "SERVER LANGUAGE"},
  //   {title : "DATABASE"},
  //   {title : "EXECRCICE"},
  //   {title : "PROJECTS"},
  // ]
  return (
    <div className='container-fluid pt-2'>
      <h1 className="text text-center py-4"
          style={{ fontFamily: "serif" }}
      >
        SERVICES
      </h1> 
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button className="nav-link active" id="most-tab" data-bs-toggle="tab" data-bs-target="#most" type="button" role="tab" aria-controls="most" aria-selected="true">MOST</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="programming-tab" data-bs-toggle="tab" data-bs-target="#programming" type="button" role="tab" aria-controls="programming" aria-selected="false">PROGRAMMING</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="webstatic-tab" data-bs-toggle="tab" data-bs-target="#webstatic" type="button" role="tab" aria-controls="webstatic" aria-selected="false">WEB STATIC</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="clientlanguage-tab" data-bs-toggle="tab" data-bs-target="#clientlanguage" type="button" role="tab" aria-controls="clientlanguage" aria-selected="false">CLIENT LANGUAGE</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="serverlanguage-tab" data-bs-toggle="tab" data-bs-target="#serverlanguage" type="button" role="tab" aria-controls="serverlanguage" aria-selected="false">SERVER LANGUAGE</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="database-tab" data-bs-toggle="tab" data-bs-target="#database" type="button" role="tab" aria-controls="database" aria-selected="false">DATABASE</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="exercices-tab" data-bs-toggle="tab" data-bs-target="#exercices" type="button" role="tab" aria-controls="exercices" aria-selected="false">EXERCICES</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="projects-tab" data-bs-toggle="tab" data-bs-target="#projects" type="button" role="tab" aria-controls="projects" aria-selected="false">PROJECTS</button>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div className="tab-pane fade show active" id="most" role="tabpanel" aria-labelledby="most-tab">
         {/* <div className="row">
          <div className="col-md-4 p-1">
            <div className="content-item">
              <div className='img-tab-item'>
                <img src="logo.png" width={400} height={220} alt="" />
              </div>
              <div className='desc-tab-item'>
                <h5>PYTHON</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4 p-1">
            <div className="content-item">
              <div className='img-tab-item'>
                <img src="logo.png" width={400} height={220} alt="" />
              </div>
              <div className='desc-tab-item'>
                <h5>HTML / CSS</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4 p-1">
            <div className="content-item">
              <div className='img-tab-item'>
                <img src="logo.png" width={400} height={220} alt="" />
              </div>
              <div className='desc-tab-item'>
                <h5>JAVASCRIPT</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4 p-1">
            <div className="content-item">
              <div className='img-tab-item'>
                <img src="logo.png" width={400} height={220} alt="" />
              </div>
              <div className='desc-tab-item'>
                <h5>SQL/MYSQL</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4 p-1">
            <div className="content-item">
              <div className='img-tab-item'>
                <img src="logo.png" width={400} height={220} alt="" />
              </div>
              <div className='desc-tab-item'>
                <h5>JQUERY</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4 p-1">
            <div className="content-item">
              <div className='img-tab-item'>
                <img src="logo.png" width={400} height={220} alt="" />
              </div>
              <div className='desc-tab-item'>
                <h5>MONGODB / NOSQL</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4 p-1">
            <div className="content-item">
              <div className='img-tab-item'>
                <img src="logo.png" width={400} height={220} alt="" />
              </div>
              <div className='desc-tab-item'>
                <h5>PHP</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4 p-1">
            <div className="content-item">
              <div className='img-tab-item'>
                <img src="logo.png" width={400} height={220} alt="" />
              </div>
              <div className='desc-tab-item'>
                <h5>BOOTSTRAP</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4 p-1">
            <div className="content-item">
              <div className='img-tab-item'>
                <img src="logo.png" width={400} height={220} alt="" />
              </div>
              <div className='desc-tab-item'>
                <h5>REACT JS</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4 p-1">
            <div className="content-item">
              <div className='img-tab-item'>
                <img src="logo.png" width={400} height={220} alt="" />
              </div>
              <div className='desc-tab-item'>
                <h5>ALGORITHME-PYTHON</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4 p-1">
            <div className="content-item">
              <div className='img-tab-item'>
                <img src="logo.png" width={400} height={220} alt="" />
              </div>
              <div className='desc-tab-item'>
                <h5>NODE JS</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4 p-1">
            <div className="content-item">
              <div className='img-tab-item'>
                <img src="logo.png" width={400} height={220} alt="" />
              </div>
              <div className='desc-tab-item'>
                <h5>SCRATCH</h5>
              </div>
            </div>
          </div>
         </div> */}
         {/* END row 1 of Tab 1 */}
        </div> 
        {/* END Tab 1 NEXT IS TAB 2 */}
        <div className="tab-pane fade" id="programming" role="tabpanel" aria-labelledby="programming-tab">
        <div className="row">
          <div className="col-md-4 p-1">
            <div className="content-item">
              <div className='img-tab-item'>
                <img src="logo.png" width={400} height={220} alt="" />
              </div>
              <div className='desc-tab-item'>
                <h5>PYTHON</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4 p-1">
            <div className="content-item">
              <div className='img-tab-item'>
                <img src="logo.png" width={400} height={220} alt="" />
              </div>
              <div className='desc-tab-item'>
                <h5>HTML / CSS</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4 p-1">
            <div className="content-item">
              <div className='img-tab-item'>
                <img src="logo.png" width={400} height={220} alt="" />
              </div>
              <div className='desc-tab-item'>
                <h5>JAVASCRIPT</h5>
              </div>
            </div>
          </div>
         </div>
         {/* END row 2 of Tab 2 */}
        </div>
        <div className="tab-pane fade" id="webstatic" role="tabpanel" aria-labelledby="webstatic-tab">
          staic
        </div>
        <div className="tab-pane fade" id="clientlanguage" role="tabpanel" aria-labelledby="clientlanguage-tab">
          client
        </div>
        <div className="tab-pane fade" id="serverlanguage" role="tabpanel" aria-labelledby="serverlanguage-tab">
          server
        </div>
        <div className="tab-pane fade" id="database" role="tabpanel" aria-labelledby="database-tab">
          databse
        </div>
        <div className="tab-pane fade" id="exercices" role="tabpanel" aria-labelledby="exercices-tab">
          exerices
        </div>
        <div className="tab-pane fade" id="projects" role="tabpanel" aria-labelledby="projects-tab">
          projects
        </div>
      </div>
    </div>
  )
}
