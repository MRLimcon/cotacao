using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace cotacao.Models
{
    public class Invest
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int InvestId { get; set; }

        public DateTime Date { get; set; }

        [Required(ErrorMessage = "Quantidade é requerida!")]
        [Range(Double.Epsilon, Double.PositiveInfinity, ErrorMessage = "Quantidade deve ser maior que 0")]
        public double Amount { get; set; }

        [Required(ErrorMessage = "Escolha uma moeda!")]
        public string Coin { get; set; }
    }
}
