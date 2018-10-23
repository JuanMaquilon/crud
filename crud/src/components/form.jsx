import React from "react";

class Form extends React.Component {
  render() {
    return (
      <form>
        <fieldset>
          <legend>Legend</legend>

          <div className="form-group">
            <label for="exampleInputDate1">Date</label>
            <input
              type="date"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Date"
            />
          </div>
          <div className="form-group">
            <label for="exampleInputTitle1">Title</label>
            <input
              type="title"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Title"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputTitle1">Tag</label>
            <select class="custom-select">
              <option selected="">Tag</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </fieldset>
      </form>
    );
  }
}
export default Form;
