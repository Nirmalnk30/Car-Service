using Microsoft.AspNetCore.Mvc;
using Apiproject.Models;

namespace Apiproject.Controllers;

[ApiController]
[Route("asp/Car")]

public class UserController: ControllerBase
{
    private readonly CarsdbContext DB;

    public UserController(CarsdbContext db)
    {
        this.DB = db;

    }     
    [HttpPost("InsertUser")]
    public object InsertUser(Register regObj)
    {
        try{
            Carsdatum u1 = new Carsdatum();
            if(u1.Id== 0){
                u1.Id=regObj.RegId;
                u1.Email=regObj.RegEmail;
                u1.Username=regObj.RegUsername;
                u1.Mobilenumber=regObj.RegMobilenumber;
                u1.Password=regObj.RegPassword;
                u1.ServicesName=regObj.RegServicesName;
                u1.CarsModel=regObj.RegCarsModel ;
                u1.ServicesPrice=regObj.RegServicesPrice;
                u1.ServiceDate=regObj.RegServiceDate;

                DB.Carsdata.Add(u1);
                DB.SaveChanges();

                return new Response{Status="Sucess",Message="User Added Sucessfully"};
                //ADDING
            }
        }
        catch(System.Exception)
        {

        }
        return new Response{Status="Error",Message="Invalid Information"};
    }


[HttpGet("GetAllCars")]
  public IQueryable<Carsdatum> GetAllCars()
  {
    try
    {
        return DB.Carsdata;
    }
    catch(System.Exception)
    {
        throw;
    }
  }


[HttpGet("GetUserDetailsById/{uid}")]
    public IActionResult GetByID(int uid)
    {
            var users =this.DB.Carsdata.FirstOrDefault(o=>o.Id==uid);
            return Ok(users);
    }

     [HttpDelete("DeleteUserDetails/{uid}")]
    public IActionResult DeleteUser(int uid)
    {
        string message = "";
            var user = this.DB.Carsdata.Find(uid);
            if (user == null)
            {
                return NotFound();
            }

            this.DB.Carsdata.Remove(user);
            int result = this.DB.SaveChanges();
            if (result > 0)
            {
                message = "User Deleted Sucessfully";
            }
            else
            {
                message = "Failed";
            }

            return Ok(message);
        }


  [HttpPost("Login")]

    public IActionResult LoginCheck(Login logObj)
    {
        var logindetail=DB.Carsdata.Where(x=>x.Email.Equals(logObj.Email)&&x.Password.Equals(logObj.Password)).FirstOrDefault();
        if (logindetail==null)
        {
        return Ok(new Response{Status="Not Valid",Message="Invalid Credebtials"});
        }
        else
        {
         return Ok(new Response{Status="Success",Message="Welcome User!"});   
        }
    }
    
}