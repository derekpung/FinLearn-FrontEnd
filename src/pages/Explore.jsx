import React from 'react';
import Page from '@components/Page';
import TitlebarImageList from '../components/ImageLine';
import ButtonLine from '../components/ButtonLine';


function Explore() {

  return (
    <Page pageTitle="Explore" containertype="containerexplore">
      <div className="containerexplore">
      <br/>
      <div>
      <ButtonLine button1="Finance" button2="Computer Science" button3="Business"></ButtonLine>
      <h3 className="subheading">Popular Courses</h3>
      <TitlebarImageList image1="https://images.unsplash.com/photo-1559526324-593bc073d938?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" title1="Investment 101" image2='https://images.unsplash.com/photo-1604594849809-dfedbc827105?11ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW52ZXN0bWVudHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60' title2="Finance 101" image3='https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' title3="Econometrics" image4='https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGludmVzdG1lbnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60' title4="Blockchain" message="heya"></TitlebarImageList>
      </div>
      <div>
      <h3 className="subheading explorehead">Top Mentors</h3>
      <TitlebarImageList image1="https://images.unsplash.com/photo-1601655781320-205e34c94eb1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" title1="Dr. Vikran Amoun" image2='https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' title2="Dr. Jessica Smith" image3='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' title3="Dr. Michael Hudson" image4='https://images.unsplash.com/photo-1551862253-418b05e65c41?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' title4="Dr. Amal Almoud" message="heya"></TitlebarImageList>
      </div>
      </div>
    </Page>
  )
}


export default Explore