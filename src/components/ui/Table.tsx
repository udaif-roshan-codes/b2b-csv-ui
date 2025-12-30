"use client";

import { Box } from "./Box";
import { Stack } from "./Stack";
import { Text } from "./Text";

type TableProps = {
  title?: string;
  columns: string[];
  data: Record<string, string>[];
};

export function Table({ title, columns, data }: TableProps) {
  return (
    <Stack gap="sm" className="w-full">
      {title && <Text weight="bold">{title}</Text>}

      <Box
        border="default"
        rounded="md"
        className="w-full overflow-x-auto"
      >
        <table className="min-w-[700px] w-full border-collapse text-sm">
          <thead className="bg-gray-50">
            <tr>
              {columns.map((c) => (
                <th
                  key={c}
                  className="px-3 py-2 text-left font-medium text-gray-700 whitespace-nowrap"
                >
                  {c}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {data.map((row, i) => (
              <tr key={i} className="border-t hover:bg-gray-50">
                {columns.map((c) => (
                  <td
                    key={c}
                    className="px-3 py-2 whitespace-nowrap"
                  >
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
