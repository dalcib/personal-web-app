import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import {urlvid} from '../../urlvid.json'
console.log(urlvid)


export default class SlideVid extends Component {
            constructor(){
                super();
               this.state = {
                   urlvid
               }

        }   


    render() {
        const card = this.state.urlvid.map((vid,i)=>{
            return (
            <div className = "imageIntroMain">
                <div className = "mainDescription">
                        <br/>
                        <p className = 'DescTit' >  
                        { vid.title }
                        </p>
                        <p className = "Description ">
                        { vid.description }   
                        </p>
                        <p className = 'Date'>
                            { vid.date }
                        </p>
                        <p className = 'Tag'>
                            { vid.tags }
                        </p>
                </div>
                <div>
                    <a>
                        <ReactPlayer url={vid.url}
                        className = "video"
                        />
                    </a>
                </div>
            </div>

            )   
        })


        return (
            <div>
              {card}
            </div>
        )
    }
}

