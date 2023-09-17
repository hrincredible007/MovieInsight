import React from "react";
import { useSelector } from "react-redux";

import "./style.scss";

import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import Img from "../../../components/lazyLoadImage/Img";
import avatar from "../../../assets/avatar.png";

const Cast = ({ data, loading }) => {
    const { url } = useSelector((state) => state.home);
    // console.log(data)
    
    
    const skeleton = () => {
        return (
            <div className="skItem">
                <div className="circle skeleton"></div>
                <div className="row skeleton"></div>
                <div className="row2 skeleton"></div>
            </div>
        );
    };
    return (
        
    (data?.length !==0) &&
        <div className="castSection">
            <ContentWrapper> 
                <div className="sectionHeading">Top Cast</div>
                {!loading ? (
                    <div className="listItems">
                        {data?.map((item)=>{
                            let imgUrl = item?.profile_path ? url.profile+ item.profile_path : avatar;
                            try{
                                return(
                                    <div 
                                        className="listItem"
                                        key = {item.id}>    
                                            <div className="profileImg">
                                                <Img src={imgUrl}></Img>
                                            </div>
                                            <div className="name">{item?.name}</div>
                                            <div className="character">{item?.character}</div>
                                    </div>
                                );
                            }
                            catch(err){
                                console.log(err);
                            }
                        })}
                    </div>
                ) : (
                    <div className="castSkeleton">
                        {skeleton()}
                        {skeleton()}
                        {skeleton()}
                        {skeleton()}
                        {skeleton()}
                        {skeleton()}
                    </div>
                )}
            </ContentWrapper>
        </div>
    );
};

export default Cast;