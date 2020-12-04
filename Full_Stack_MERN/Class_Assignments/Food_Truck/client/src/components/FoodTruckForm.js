import React from 'react';
import { navigate } from '@reach/router';

const FoodTruckForm = (props) => {

    const { foodtruck, errors, action, onChangeHandler } = props;



    return (
        <>
            <div className="form-group row">
                <label htmlFor="name" className="col-sm-4">Name: </label>
                <input type="text" name="name" onChange={onChangeHandler} value={foodtruck.truckName} className="col-sm-8 form-control"/>
            </div>
            <div className="form-group row">
                <label htmlFor="style" className="col-sm-4">Style: </label>
                <input type="text" name="style" onChange={onChangeHandler} value={foodtruck.style} className="col-sm-8 form-control"/>
            </div>
            <div className="form-group row">
                <label htmlFor="description" className="col-sm-4">Description: </label>
                <input type="text" name="description" onChange={onChangeHandler} value={foodtruck.description} className="col-sm-8 form-control"/>
            </div>
            <div className="form-group row">
                <div className="col-sm-6"></div>
                {
                    action === "edit" ?
                    <>
                        <button type="button" className="offset-sm-6 col-sm-2">Delete</button>
                        <button type="button" onClick={ () => navigate('/') } className="col-sm-2 btn btn-secondary">Cancel</button>
                        <button type="submit" className="col-sm-2 btn btn-primary">Update</button>
                    </>
                    :
                    <>
                        <button type="button" onClick={ () => navigate('/') } className="offset-sm-8 col-sm-2 btn btn-secondary">Cancel</button>
                        <button type="submit" className="col-sm-2 btn btn-primary">Submit</button>
                    </>
                }
            </div>
        </>
    )
}

export default FoodTruckForm;