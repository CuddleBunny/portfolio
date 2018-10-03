using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CuddleBunnyPortfolio.Models;
using MailKit.Net.Smtp;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using MimeKit;
using MimeKit.Text;

namespace CuddleBunnyPortfolio.Controllers {
    public class HomeController : Controller {
        public IActionResult Index() {
			Console.WriteLine("############################### Index");
            return View();
        }
    }
}
