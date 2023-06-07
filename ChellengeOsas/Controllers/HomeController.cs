using ChellengeOsas.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
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

                        var data = JsonConvert.DeserializeObject<starWars>(json);

                        ViewBag.JsonData = JsonConvert.SerializeObject(data);

                        return View(data);

                       

                    }
                }
            }

                   

        }

        public IActionResult Privacy()
        {
            return View();
        }






        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
