using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using cotacao.Serializers;
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
        
        public IActionResult Form(int investId)
        {
            var invests = _context.Invest.Find(investId);
            return View(invests);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Form(InvestForm form)
        {
            if (ModelState.IsValid) {
                Invest newInvests = new Invest();
                
                newInvests.Date = DateTime.Now;
                newInvests.Amount = form.amount;
                newInvests.Coin = form.coin;
                _context.Invest.Add(newInvests);
                var response = _context.SaveChanges();

                return RedirectToAction("Index", "Invest");
            }
            return View(form);
        }

        public IActionResult Read(int investId)
        {
            return View();
        }

        [HttpPut]
        public IActionResult Update(int investId)
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
