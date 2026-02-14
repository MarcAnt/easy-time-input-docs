"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useHash } from "@/hooks/use-hash";
import { filteredByProps } from "@/helpers/filter-by-props";

const PropsWrapper = () => {
  const hash = useHash();

  const props = filteredByProps(hash);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Prop</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Default</TableHead>
          <TableHead>Description</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {props.map((prop) => (
          <TableRow key={prop.prop}>
            <TableCell className="font-medium">{prop.prop}</TableCell>
            <TableCell>{prop.type}</TableCell>
            <TableCell>{prop.default}</TableCell>
            <TableCell>{prop.description}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default PropsWrapper;
