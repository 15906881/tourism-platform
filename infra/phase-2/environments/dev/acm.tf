# Only create certificate if domain is provided
resource "aws_acm_certificate" "app" {
  count             = var.app_dns_name != "" ? 1 : 0
  domain_name       = var.app_dns_name
  validation_method = "DNS"

  lifecycle {
    create_before_destroy = true
  }
}

resource "aws_route53_record" "cert_validation" {
  for_each = var.app_dns_name != "" ? {
    for dvo in aws_acm_certificate.app[0].domain_validation_options :
    dvo.domain_name => {
      name    = dvo.resource_record_name
      type    = dvo.resource_record_type
      value   = dvo.resource_record_value
      zone_id = var.zone_id
    }
  } : {}

  zone_id = each.value.zone_id
  name    = each.value.name
  type    = each.value.type
  ttl     = 60
  records = [each.value.value]
}

resource "aws_acm_certificate_validation" "app" {
  count                   = var.app_dns_name != "" ? 1 : 0
  certificate_arn         = aws_acm_certificate.app[0].arn
  validation_record_fqdns = [for record in aws_route53_record.cert_validation : record.fqdn]
}
