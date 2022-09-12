import React from 'react'
import CountUp from 'react-countup'

const First = () => {
  return (
    <>
       <div class="container">
        <div class="row">
            <div class="col-12 p-0" id="first">
                <div class="col-lg-3 col-md-3 col-sm-12 col-12" id="f1">
                    <div id="up" class="col-12">
                        <div id="number" class="count"><CountUp   duration={3.75} end={1000} /></div><span id="span">+</span>
                    </div>
                    <h3>Succeeded Projects</h3>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-12 col-12 mx-5" id="f2">
                    <div id="up" class="col-12">
                        <div id="number" class="count"><CountUp   duration={3.75} end={17150} /></div><span id="span">+</span>
                    </div>
                    <h3>Working Hours Spent</h3>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-12 col-12 " id="f3">
                    <div id="up" class="col-12">
                        <div id="number" class="count"><CountUp  duration={3.75} end={1500} /> </div><span id="span">+</span>
                    </div>
                    <h3>Happy Clients</h3>
                </div>
            </div>
        </div>
        </div>
    </>
  )
}

export default First
