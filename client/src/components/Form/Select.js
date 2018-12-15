import React from "react";

export const Select = () => {
    return (
      <div class="form-group mx-3">
      <label for="exampleFormControlSelect1">Example select</label>
      <a class="float-right" href='http://puha.gosalon.site' target="_blank">View Templates</a>
      <select class="form-control" id="exampleFormControlSelect1">
        <option value="template 1">Template 1</option>
        <option value="template 2">Template 2</option>
        <option value="template 3">Template 3</option>
        <option value="template 4">Template 4</option>
      </select>
    </div>
    );
}