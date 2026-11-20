import dbHr from "../config/dbHr.js";

export const listar = (req, res) => {
  dbHr.query("SELECT * FROM  funcionarios", (err, results) => {
    if (err)
      return res.status(500).json({ erro: "Erro ao Buscar Funcionarios" });
    res.json(results);
  });
};

export const inserir = (req, res) => {
  const {
    nome_completo,
    cpf,
    data_nascimento,
    email,
    telefone,
    cargo,
    departamento,
    data_admissao,
    salario,
    tipo_contrato,
    status,
  } = req.body;

  const sql =
    `INSERT INTO funcionarios (nome_completo, cpf, data_nascimento, email, telefone, cargo, departamento, data_admissao, salario, tipo_contrato, status) VALUES (?,?,?,?,?,?,?,?,?,?,?)`;
  dbHr.query(
    sql,
    [
      nome_completo,
      cpf,
      data_nascimento,
      email,
      telefone,
      cargo,
      departamento,
      data_admissao, 
      salario,
      tipo_contrato,
      status,
    ],
    (err) => {
      if (err)
        return res
          .status(500)
          .json({ erro: "Erro ao Inserir funcionário", detalhes: err.message });

      res.json({
        mensagem: "Funcionário inserido com sucesso!",
        id: result.insertId,
      });
    },
  );
};

export const atualizar = (req, res) => {
  const { id } = req.params;
  const {
    nome_completo,
    cpf,
    data_nascimento,
    email,
    telefone,
    cargo,
    departamento,
    data_admissao,
    salario,
    tipo_contrato,
    status,
  } = req.body;

  const sql =
    'UPDATE funcionarios SET nome_completo=?, cpf=?, data_nascimento=?, email=?, telefone=?, cargo=?, departamento=?, data_admissao=?, salario=?, tipo_contrato=?, status=? WHERE id=?';
  dbHr.query(
    sql,
    [
      nome_completo,
      cpf,
      data_nascimento,
      email,
      telefone,
      cargo,
      departamento,
      data_admissao,
      salario,
      tipo_contrato,
      status,
      id,
    ],
    (err) => {
      if (err)
        return res.status(500).json({ erro: "Erro ao atualizar funcionário", detalhes: err.message });
      res.json({ mensagem: "Funcionario atualizado com sucesso!" });
    },
  );
};

export const deletar = (req, res) => {
  dbHr.query("DELETE FROM  funcionarios WHERE id=?", (err, res) => {
    if (err)
      return res.status(500).json({ erro: "Erro ao Excluir Funcionario" });
    res.json({ mensagem: "Funcionario excluido com sucesso!" });
  });
};
