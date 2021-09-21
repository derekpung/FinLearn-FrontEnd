import axios from "axios";

export const getAllMentors = async () => {
  // this function should be returning a list of top mentors from our db
  // keys according to database schema
  return [
    {
      image_link: "https://images.unsplash.com/photo-1601655781320-205e34c94eb1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title:"Dr. Vikran Amoun"
    },{
      image_link: 'https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      title:"Dr. Jessica Smith"
    },{
      image_link: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      title:"Dr. Michael Hudson"
    },{
      image_link: 'https://images.unsplash.com/photo-1551862253-418b05e65c41?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      title:"Dr. Amal Almoud"
    }
  ]
}