using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using cotacao.Models;

namespace cotacao.Controllers
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
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        public IActionResult Moedas()
        {
            return View();
        }

        public IActionResult Precos()
        {
            return View();
        }

        public IActionResult ViewCSharp()
        {
            return View();
        }

        public IActionResult Logged()
        {
            return View();
        }

        public ActionResult Validate()
        {
            return Json(new { status = true, message = "Login realizado com sucesso!"});
            /*
            var _login = _context.Login.Where(s => s.Email == admin.Email);
            if(_login.Any()){
                if(_login.Where(s => s.Password == admin.Password).Any()){
                    
                    return Json(new { status = true, message = "Login realizado com sucesso!"});
                }
                else
                {
                    return Json(new { status = false, message = "Senha inválida!"});
                }
            }
            else
            {
                return Json(new { status = false, message = "Email Inválido!"});
            }
            */
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
