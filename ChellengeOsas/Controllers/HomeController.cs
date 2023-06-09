using ChellengeOsas.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Net;
using System.Text;
using Newtonsoft.Json;

namespace ChellengeOsas.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            string apiUrl = "https://swapi.dev/api/";

            HttpWebRequest request = (HttpWebRequest)WebRequest.Create(apiUrl);
            request.Method = "GET";

            using (HttpWebResponse response = (HttpWebResponse)request.GetResponse())
            {
                using (Stream stream = response.GetResponseStream())
                {
                    using (StreamReader reader = new StreamReader(stream, Encoding.UTF8))
                    {
                        string json = reader.ReadToEnd();

                        var films = JsonConvert.DeserializeObject<Films>(json);
                        var peoples = JsonConvert.DeserializeObject<Peoples>(json);
                        var planets = JsonConvert.DeserializeObject<Planets>(json);
                        var species = JsonConvert.DeserializeObject<Species>(json);
                        var starships = JsonConvert.DeserializeObject<Starships>(json);
                        var vehicles = JsonConvert.DeserializeObject<Vehicles>(json);

                        ViewBag.Films = films;
                        ViewBag.Peoples = peoples;
                        ViewBag.Planets = planets;
                        ViewBag.Species = species;
                        ViewBag.Starships = starships;
                        ViewBag.Vehicles = vehicles;

                        return View();
                    }
                }
            }
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [HttpPost]
        public IActionResult GetData(string type)
        {
            switch (type)
            {
                case "films":
                    var films = ViewBag.Films as Films;
                    return PartialView("_FilmsPartialView.cshtml", films);
                case "people":
                    var peoples = ViewBag.Peoples as Peoples;
                    return PartialView("_PeoplePartialView.cshtml", peoples);
                case "planets":
                    var planets = ViewBag.Planets as Planets;
                    return PartialView("_PlanetsPartialView.cshtml", planets);
                case "species":
                    var species = ViewBag.Species as Species;
                    return PartialView("_SpeciesPartialView.cshtml", species);
                case "starships":
                    var starships = ViewBag.Starships as Starships;
                    return PartialView("_StarshipsPartialView.cshtml", starships);
                case "vehicles":
                    var vehicles = ViewBag.Vehicles as Vehicles;
                    return PartialView("_VehiclesPartialView.cshtml", vehicles);
                default:
                    return PartialView();
            }
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
