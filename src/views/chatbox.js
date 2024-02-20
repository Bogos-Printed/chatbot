export default () => (
  `
  <div class="col-9" id="chatbox">
  <div class="ms-1 container-fluid row">

    <div class="bot rounded mt-3 w-50 col-6">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus possimus aut eum nostrum cumque recusandae iste beatae. Vero debitis magni unde, quod autem ipsam perspiciatis?</p>
    </div>

    <div class="col-6"></div>
  </div>
  
  <div class="me-1 container-fluid row">
    <div class="col-6"></div>

    <div class="user container rounded mt-3 w-50 col-6 ">
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus laborum molestiae quidem sint eos, eaque asperiores inventore velit perferendis, impedit officia? Consequatur animi nisi voluptates!</p>
    </div>
  </div>

  <div class="d-flex position-absolute bottom-0 end-0 mb-1 m-4 " id="bar">
    <input class="form-control" id="message" placeholder="message goes here"></input>
    <button type="submit" class="btn btn-primary"><i class="fa-solid fa-arrow-right"></i></button>
  </div>
  `
);
