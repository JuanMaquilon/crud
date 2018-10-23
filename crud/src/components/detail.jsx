import React from "react";

class Detail extends React.Component {
  render() {
    return (
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Title</th>
            <th scope="col">Tag</th>
            <th scope="col" />
            <th scope="col" />
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">10/22/18</th>
            <td>Tips for ReactJS</td>
            <td>Web Development</td>
            <td>Edit</td>
            <td>Delete</td>
          </tr>
        </tbody>
      </table>
    );
  }
}
export default Detail;
