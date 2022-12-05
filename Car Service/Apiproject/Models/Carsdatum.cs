using System;
using System.Collections.Generic;

namespace Apiproject.Models;

public partial class Carsdatum
{
    public int Id { get; set; }

    public string? Email { get; set; }

    public string? Username { get; set; }

    public string? Mobilenumber { get; set; }

    public string? Password { get; set; }

    public string? ServicesName { get; set; }

    public string? CarsModel { get; set; }

    public string? ServicesPrice { get; set; }

    public string? ServiceDate { get; set; }
}
