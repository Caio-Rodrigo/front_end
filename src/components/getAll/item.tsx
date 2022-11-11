

type props = {
  item:any
}

export default function Item({item}:props){
  const {name, email} = item

  return (
    <div className="caixa">
      <div className="cartao">
        <h3><strong>Nome</strong>:{name}</h3>
        <h4><strong>Email</strong>:{email}</h4>
      </div>
    </div>
  )
}