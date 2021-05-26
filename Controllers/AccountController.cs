using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using cotacao.Context;

namespace cotacao.Controllers
{
    public class AccountController : Controller
    {
        private readonly ApplicationDbContext _context;
        public IActionResult Login()
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

        public ActionResult Create()
        {
            //stub
            return View();
        }
    }
}