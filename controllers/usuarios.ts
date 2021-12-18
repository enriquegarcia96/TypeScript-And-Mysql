import { Request, Response } from "express";
import Usuario from "../models/usuario";

export const getUsuarios = async (req: Request, res: Response) => {
  const usuarios = await Usuario.findAll();

  res.json({ usuarios });
};

export const getUsuario = async (req: Request, res: Response) => {
  const { id } = req.params;

  const usuario = await Usuario.findByPk(id);

  if (!usuario) {
    res.status(404).json({
      msg: `No existe un usuario con el id ${id}`,
    });
  }

  res.json(usuario);
};

export const postUsuario = async (req: Request, res: Response) => {
  const { body } = req;

  try {
    const existeEmail = await Usuario.findOne({
      where: {
        email: body.email,
      },
    });

    if (existeEmail) {
      return res.status(400).json({
        msg: "Ya existe el usuario con ese email" + body.email,
      });
    }

    const usuario = new Usuario(body);
    await usuario.save();

    res.status(200).json(usuario);
  } catch (error) {
    console.log(error);
    res.json({
      msg: "Hable con el administrador",
    });
  }
};

export const putUsuario = async(req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;

  try {

    const usuario = await Usuario.findByPk(id)

    if(!usuario){
        return res.status(404).json({
            msg: 'No existe un usuario con el id '+ id
        })
    }

    await usuario.update( body );
    res.json(usuario);

  } catch (error) {
    console.log(error);
    res.json({
      msg: "Hable con el administrador",
    });
  }
};

export const delteUsuario = async (req: Request, res: Response) => {
  const { id } = req.params;

  const usuario = await Usuario.findByPk(id);


  if(!usuario){
    return res.status(404).json({
        msg: 'No existe un usuario con el id '+ id
    })
  }

  // eliminacion logica
  await usuario.update({ estado: false });

    // eliminacion fisica
    //   await usuario.destroy();

  res.json(usuario);

};
