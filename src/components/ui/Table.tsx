"use client";
import { cva } from "class-variance-authority";
import { Box } from "./Box";
import { Stack } from "./Stack";
import { Text } from "./Text";

export function Table({ title, columns, data }: any) {
    return (
      <Stack gap="sm">
        {title && <Text weight="bold">{title}</Text>}
        <Box border="default" rounded="md">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                {columns.map((c: string) => (
                  <th key={c} className="p-2 text-left font-medium">
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((row: any, i: number) => (
                <tr key={i} className="border-t">
                  {columns.map((c: string) => (
                    <td key={c} className="p-2">
                      {row[c]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </Box>
      </Stack>
    );
  }
  