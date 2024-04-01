<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <body>
                <h2>Tabela de Tios</h2>
                <table border="1" width="100%">
                    <tr bgcolor="#119933">
                        <th>IDADE</th>
                        <th>NOME</th>
                        <th>PROFISSÃO</th>
                        <th>SEXO</th>
                    </tr>
                    <xsl:for-each select="familia/tios">
                        <xsl:sort select="nome" data-type="text" order="ascending"/>
                        <tr>
                            <td align="center"><xsl:value-of select="idade"/></td>
                            <td><xsl:value-of select="nome"/></td>
                            <td><xsl:value-of select="profissao"/></td>
                            <td><xsl:value-of select="sexo"/></td>
                        </tr>
                    </xsl:for-each>
                </table>
                <p align="left">Média das idades: <xsl:value-of select="sum(familia/tios/idade) div count(familia/tios)"/></p>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>