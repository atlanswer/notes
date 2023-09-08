# 提纲

## 第一章 技术背景

1. 信号完整性的含义
1. SI 包含哪 4 类？也可以分为三大类：SI、PI 和 EMI
1. 当前及未来的硬件电路设计面临异常严峻的问题有哪些？上升边变短，设计周期缩短等
1. 上升时间
1. SI 设计的三个重要过程：建模、仿真、测量

## 第二章 时域与频域

1. 概念解析：信号带宽，测量带宽，模型带宽，互连带宽
1. 信号带宽的近似估计法
1. 带宽对上升沿有什么影响

## 第四章 阻抗

1. 简述阻抗在信号完整性分析与设计中的重要意义
1. 概念解析：建模，实际模型，理想模型
1. 用阻抗简单描述 4 类信号完整性问题

## 第六章 电感

1. 概念解析：自感、互感、部分电感、回路电感、总电感（有效电感）、等效电感
1. 有哪些措施可以减小去耦电容的寄生电感
1. 从电感角度分析右图连接器的引脚分布对信号完整性的影响
1. 分析右图互连结构低频和高频的电流分布
1. 从电感角度解读趋肤效应
1. 从电感和阻抗角度，分析双绞线、微带线、带状线等理想传输线的电流分布

## 第七章 传输线

1. 什么是特性阻抗？特性阻抗与上升沿信号受到的瞬时阻抗有何关系？
1. 为什么 50 欧姆传输被广泛应用于高速电子系统？
1. 内存卡上出现许多弯弯扭扭的走线，这些走线有何深意？
1. 返回电流在切换参考平面时，如何保证返回路径的低阻抗
1. 传输线的 n 节集总模型：节数估算，Z 计算，延时的计算
1. 列举 10 种非均匀传输线结构

## 第八章 反射

1. 引起反射的原因是什么？如何消除反射？（详细讨论每种方法的优缺点）
1. 电路板有哪些常见的不可避免的突变互连？当这些突变互连长度达到何种程度就必须采取措施
1. 什么是补偿设计？其基本原理是什么？
1. 从测量或仿真时域波形，如何分辨容性突变和感性突变？
1. 列举 10 种以上阻抗突变的互连结构
1. 如何解决多分支总线的反射问题

## 传输线的损耗

1. 什么原因导致上升沿退化（变长）？
1. 导线中的损耗包括哪 5 种