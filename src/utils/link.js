export default function getLinkTarget(link) {
  return link.includes('http') ? '_blank' : '_self'
}
