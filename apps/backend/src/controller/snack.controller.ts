import { Request, Response, NextFunction } from 'express'
import { prisma } from '../lib/prisma.client'

export async function listSnacks(req: Request, res: Response, next: NextFunction) {
  try {
    const products = await prisma.snack.findMany({
      orderBy: { createdAt: 'desc' }
    })

    res.json(products)
  } catch (err) {
    next(err)
  }
}

export async function listBySnack(req: Request, res: Response, next: NextFunction) {
  try {
    const snack = String(req.params.snack)

    const product = await prisma.snack.findMany({
      where: { snack: snack }
    })

    if (!product) return res.status(404).json({ error: 'Produto não encontrado' })

    res.json(product)
  } catch (err) {
    next(err)
  }
}

export async function createSnack(req: Request, res: Response, next: NextFunction) {
  try {
    const { name, description, price, image, snack } = req.body

    const product = await prisma.snack.create({
      data: {
        name,
        description,
        price: Number(price),
        image,
        snack,
      }
    })

    res.status(201).json(product)
  } catch (err) {
    next(err)
  }
}

export async function deleteSnack(req: Request, res: Response, next: NextFunction) {
  try {
    await prisma.snack.delete({ where: { id: String(req.params.id) } })
    res.status(204).send()
  } catch (err) {
    next(err)
  }
}
