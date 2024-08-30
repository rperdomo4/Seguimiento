import argon2 from 'argon2';
import jwt from 'jsonwebtoken';
import Usuario from '../models/UsuarioModel.js';

export const login = async (req, res) => {
    try {
        const { Usuario: usuarioName, Contrasenia, NuevaContrasenia, action } = req.body;

        
        if (action === 'change-password') {
            if (!usuarioName || !NuevaContrasenia) {
                return res.status(400).json({ error: 'Faltan datos requeridos' });
            }

            const usuario = await Usuario.findOne({ where: { Usuario: usuarioName } });

            if (!usuario) {
                return res.status(401).json({ error: 'Usuario no encontrado' });
            }

            if (await argon2.verify(usuario.Contrasenia, NuevaContrasenia)) {
                return res.status(400).json({ error: 'La nueva contraseña no puede ser igual a la actual' });
            }

          
            usuario.Contrasenia = await argon2.hash(NuevaContrasenia);
            usuario.CambioContrasenia = true; 
            await usuario.save();

            return res.status(200).json({ message: 'Contraseña cambiada con éxito' });
        }

        if (!usuarioName || !Contrasenia) {
            return res.status(400).json({ error: 'Faltan datos requeridos' });
        }

        const usuario = await Usuario.findOne({ where: { Usuario: usuarioName } });

        if (!usuario) {
            return res.status(401).json({ error: 'Credenciales inválidas' });
        }

        if (!usuario.CambioContrasenia) {
            return res.status(403).json({
                error: 'Debe cambiar su contraseña antes de continuar',
                usuario: usuario.Usuario
            });
        }

        if (!(await argon2.verify(usuario.Contrasenia, Contrasenia))) {
            return res.status(401).json({ error: 'Credenciales inválidas' });
        }

        const token = jwt.sign({ id: usuario.IdUsuario, Usuario: usuario.Usuario }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES_IN,
        });

        res.status(200).json({
            token,
            usuario: usuario.Usuario
        });
    } catch (error) {
        console.error('Error al procesar la solicitud:', error);
        res.status(500).json({ error: 'Error al procesar la solicitud' });
    }
};