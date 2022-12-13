import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from"mdbreact";

const messageFromTheCEO={
    width:'902px',
    height:'176px',
    fontSize:'36px',
    marginTop: '133px',
    fontWeight: '600'
}

const CarouselPage = () => {
  return (
    <MDBContainer>
      <MDBCarousel
        activeItem={1}
        length={3}
        showControls={true}
        showIndicators={true}
        className="z-depth-1"
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
            <center>
                <div style={{messageFromTheCEO}} className="z-depth-1">
                    <p>
                    “You guys literally unlocked and inspired us about what was possible. When I look at this brand, I suddenly realised everything I’ve been trying to say, now we have a way to express it.”
                    </p>
                </div>
                <p style={{color: '#00000099',fontsize:'24px'}}>Alwazebrand, CEO, Aabid Hasan</p>
            </center>
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
            <center>
                <div style={{messageFromTheCEO}} className="z-depth-1">
                    <p>
                    “You guys literally unlocked and inspired us about what was possible. When I look at this brand, I suddenly realised everything I’ve been trying to say, now we have a way to express it.”
                    </p>
                </div>
                <p style={{color: '#00000099',fontsize:'24px'}}>Alwazebrand, CEO, Aabid Hasan</p>
            </center>
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
            <center>
                <div style={{messageFromTheCEO}} className="z-depth-1">
                    <p>
                    “You guys literally unlocked and inspired us about what was possible. When I look at this brand, I suddenly realised everything I’ve been trying to say, now we have a way to express it.”
                    </p>
                </div>
                <p style={{color: '#00000099',fontsize:'24px'}}>Alwazebrand, CEO, Aabid Hasan</p>
            </center>
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
}

export default CarouselPage;