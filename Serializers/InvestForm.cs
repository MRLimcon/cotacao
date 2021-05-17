using System;
using System.ComponentModel.DataAnnotations;

namespace cotacao.Serializers
{
    public class InvestForm
    {
        [Required(ErrorMessage = "Quantidade é requerida!")]
        [Range(Double.Epsilon, Double.PositiveInfinity, ErrorMessage = "Quantidade deve ser maior que 0")]
        public double amount { get; set; }

        [Required(ErrorMessage = "Escolha uma moeda!")]
        public string coin { get; set; }

    }
}
