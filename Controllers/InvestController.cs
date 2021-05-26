using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using cotacao.Context;
using cotacao.Models;

namespace cotacao.Controllers
{
    public class InvestController : Controller
    {
        private readonly ApplicationDbContext _context;

        private readonly ILogger<InvestController> _logger;

        public InvestController(ILogger<InvestController> logger, ApplicationDbContext context)
        {
            _context = context;
            _logger = logger;
        }

        public IActionResult Index()
        {
            var invests = _context.Invest.ToList();
            // var invests = _context.Invest.Update();
            // var invests = _context.Invest.Remove();
            // var invests = _context.SaveChanges();
            return View(invests);
        }
        
        public IActionResult Form(int id)
        {
            var invest = _context.Invest.Find(id);
            return View(invest);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Form(Invest form)
        {
            if (ModelState.IsValid) {
                if (form.InvestId > 0)
                {
                    var invest = _context.Invest.Find(form.InvestId);
                    invest.Amount = form.Amount;
                    invest.Coin = form.Coin;

                }
                else
                {
                    form.Date = DateTime.Now;
                    _context.Invest.Add(form);
                }
                var response = _context.SaveChanges();

                return RedirectToAction("Index", "Invest");
            }
            return View(form);
        }

        [HttpPost]
        public IActionResult Delete(int id)
        {
            var invest = _context.Invest.Find(id);
            _context.Invest.Remove(invest);
            var response = _context.SaveChanges();
            return RedirectToAction("Index", "Invest");
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
